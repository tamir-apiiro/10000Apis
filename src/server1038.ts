
const express = require('express')
import {handler1038} from "./handler1038";
const app = express()
app.get('/1038', handler1038)
app.listen(3000, () => {})
        