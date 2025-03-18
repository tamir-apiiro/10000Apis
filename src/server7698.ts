
const express = require('express')
import {handler7698} from "./handler7698";
const app = express()
app.get('/7698', handler7698)
app.listen(3000, () => {})
        