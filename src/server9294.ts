
const express = require('express')
import {handler9294} from "./handler9294";
const app = express()
app.get('/9294', handler9294)
app.listen(3000, () => {})
        