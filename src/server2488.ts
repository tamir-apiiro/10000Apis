
const express = require('express')
import {handler2488} from "./handler2488";
const app = express()
app.get('/2488', handler2488)
app.listen(3000, () => {})
        