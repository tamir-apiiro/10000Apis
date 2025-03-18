
const express = require('express')
import {handler1775} from "./handler1775";
const app = express()
app.get('/1775', handler1775)
app.listen(3000, () => {})
        