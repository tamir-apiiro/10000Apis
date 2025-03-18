
const express = require('express')
import {handler7213} from "./handler7213";
const app = express()
app.get('/7213', handler7213)
app.listen(3000, () => {})
        