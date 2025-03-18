
const express = require('express')
import {handler2685} from "./handler2685";
const app = express()
app.get('/2685', handler2685)
app.listen(3000, () => {})
        