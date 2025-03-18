
const express = require('express')
import {handler680} from "./handler680";
const app = express()
app.get('/680', handler680)
app.listen(3000, () => {})
        