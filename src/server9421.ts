
const express = require('express')
import {handler9421} from "./handler9421";
const app = express()
app.get('/9421', handler9421)
app.listen(3000, () => {})
        