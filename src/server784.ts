
const express = require('express')
import {handler784} from "./handler784";
const app = express()
app.get('/784', handler784)
app.listen(3000, () => {})
        