
const express = require('express')
import {handler7085} from "./handler7085";
const app = express()
app.get('/7085', handler7085)
app.listen(3000, () => {})
        