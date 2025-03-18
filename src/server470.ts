
const express = require('express')
import {handler470} from "./handler470";
const app = express()
app.get('/470', handler470)
app.listen(3000, () => {})
        