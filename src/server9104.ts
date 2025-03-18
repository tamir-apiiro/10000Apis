
const express = require('express')
import {handler9104} from "./handler9104";
const app = express()
app.get('/9104', handler9104)
app.listen(3000, () => {})
        