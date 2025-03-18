
const express = require('express')
import {handler9790} from "./handler9790";
const app = express()
app.get('/9790', handler9790)
app.listen(3000, () => {})
        