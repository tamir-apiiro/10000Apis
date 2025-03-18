
const express = require('express')
import {handler930} from "./handler930";
const app = express()
app.get('/930', handler930)
app.listen(3000, () => {})
        