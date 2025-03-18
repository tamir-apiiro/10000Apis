
const express = require('express')
import {handler7031} from "./handler7031";
const app = express()
app.get('/7031', handler7031)
app.listen(3000, () => {})
        