
const express = require('express')
import {handler7333} from "./handler7333";
const app = express()
app.get('/7333', handler7333)
app.listen(3000, () => {})
        