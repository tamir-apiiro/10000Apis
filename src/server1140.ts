
const express = require('express')
import {handler1140} from "./handler1140";
const app = express()
app.get('/1140', handler1140)
app.listen(3000, () => {})
        