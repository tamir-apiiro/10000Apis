
const express = require('express')
import {handler1732} from "./handler1732";
const app = express()
app.get('/1732', handler1732)
app.listen(3000, () => {})
        