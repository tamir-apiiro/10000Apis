
const express = require('express')
import {handler6661} from "./handler6661";
const app = express()
app.get('/6661', handler6661)
app.listen(3000, () => {})
        