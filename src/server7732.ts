
const express = require('express')
import {handler7732} from "./handler7732";
const app = express()
app.get('/7732', handler7732)
app.listen(3000, () => {})
        