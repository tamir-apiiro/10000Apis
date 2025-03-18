
const express = require('express')
import {handler1094} from "./handler1094";
const app = express()
app.get('/1094', handler1094)
app.listen(3000, () => {})
        