
const express = require('express')
import {handler924} from "./handler924";
const app = express()
app.get('/924', handler924)
app.listen(3000, () => {})
        