
const express = require('express')
import {handler1475} from "./handler1475";
const app = express()
app.get('/1475', handler1475)
app.listen(3000, () => {})
        