
const express = require('express')
import {handler1610} from "./handler1610";
const app = express()
app.get('/1610', handler1610)
app.listen(3000, () => {})
        