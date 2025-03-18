
const express = require('express')
import {handler4860} from "./handler4860";
const app = express()
app.get('/4860', handler4860)
app.listen(3000, () => {})
        