
const express = require('express')
import {handler475} from "./handler475";
const app = express()
app.get('/475', handler475)
app.listen(3000, () => {})
        