
const express = require('express')
import {handler730} from "./handler730";
const app = express()
app.get('/730', handler730)
app.listen(3000, () => {})
        