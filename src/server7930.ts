
const express = require('express')
import {handler7930} from "./handler7930";
const app = express()
app.get('/7930', handler7930)
app.listen(3000, () => {})
        