
const express = require('express')
import {handler1896} from "./handler1896";
const app = express()
app.get('/1896', handler1896)
app.listen(3000, () => {})
        