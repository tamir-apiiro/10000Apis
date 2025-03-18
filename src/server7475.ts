
const express = require('express')
import {handler7475} from "./handler7475";
const app = express()
app.get('/7475', handler7475)
app.listen(3000, () => {})
        