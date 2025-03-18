
const express = require('express')
import {handler9829} from "./handler9829";
const app = express()
app.get('/9829', handler9829)
app.listen(3000, () => {})
        