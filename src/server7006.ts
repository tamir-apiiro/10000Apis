
const express = require('express')
import {handler7006} from "./handler7006";
const app = express()
app.get('/7006', handler7006)
app.listen(3000, () => {})
        