
const express = require('express')
import {handler2918} from "./handler2918";
const app = express()
app.get('/2918', handler2918)
app.listen(3000, () => {})
        