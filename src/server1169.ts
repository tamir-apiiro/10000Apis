
const express = require('express')
import {handler1169} from "./handler1169";
const app = express()
app.get('/1169', handler1169)
app.listen(3000, () => {})
        