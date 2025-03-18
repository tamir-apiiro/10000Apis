
const express = require('express')
import {handler272} from "./handler272";
const app = express()
app.get('/272', handler272)
app.listen(3000, () => {})
        