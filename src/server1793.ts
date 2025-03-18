
const express = require('express')
import {handler1793} from "./handler1793";
const app = express()
app.get('/1793', handler1793)
app.listen(3000, () => {})
        