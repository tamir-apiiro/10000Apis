
const express = require('express')
import {handler7820} from "./handler7820";
const app = express()
app.get('/7820', handler7820)
app.listen(3000, () => {})
        