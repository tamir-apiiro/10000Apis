
const express = require('express')
import {handler790} from "./handler790";
const app = express()
app.get('/790', handler790)
app.listen(3000, () => {})
        