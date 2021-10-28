library(readr)
banco <- read_csv("Data.xlsx - Data.csv")
summary(banco)
banco$Brand
unique(banco$Brand)
unique(banco$Subrand)
mean(na.omit(banco$`Order qty`) )
# sum(banco$Subrand == NA)
banco_limpo = banco[complete.cases(banco), ]
unique(banco_limpo$Subrand)
mean(banco_limpo$`Order qty`)
library(plyr)
count(banco_limpo, "Brand")
marcas = banco$Brand

marcaVsQnt = data.frame(banco$Subrand,banco$`Order qty`,rep(FALSE, times = length(banco$Subrand)))
marcaVsQnt_limpo = marcaVsQnt[complete.cases(marcaVsQnt),]

write.csv(marcaVsQnt_limpo,"C:/Users/heito/Documents/GitHub/API-Ambev/API-Ambev/src/csv/completo.csv", row.names = TRUE)
summary(marcaVsQnt_limpo)
unique(marcaVsQnt_limpo$banco.Subrand)
