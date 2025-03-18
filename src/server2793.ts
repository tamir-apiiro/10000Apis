
const express = require('express')
import {handler2793} from "./handler2793";
const app = express()
app.get('/2793', handler2793)
app.listen(3000, () => {})
        