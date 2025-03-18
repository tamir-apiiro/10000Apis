
const express = require('express')
import {handler1803} from "./handler1803";
const app = express()
app.get('/1803', handler1803)
app.listen(3000, () => {})
        