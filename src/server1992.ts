
const express = require('express')
import {handler1992} from "./handler1992";
const app = express()
app.get('/1992', handler1992)
app.listen(3000, () => {})
        