
const express = require('express')
import {handler9951} from "./handler9951";
const app = express()
app.get('/9951', handler9951)
app.listen(3000, () => {})
        