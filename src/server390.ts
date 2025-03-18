
const express = require('express')
import {handler390} from "./handler390";
const app = express()
app.get('/390', handler390)
app.listen(3000, () => {})
        