
const express = require('express')
import {handler7860} from "./handler7860";
const app = express()
app.get('/7860', handler7860)
app.listen(3000, () => {})
        