
const express = require('express')
import {handler7103} from "./handler7103";
const app = express()
app.get('/7103', handler7103)
app.listen(3000, () => {})
        