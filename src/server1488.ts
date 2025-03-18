
const express = require('express')
import {handler1488} from "./handler1488";
const app = express()
app.get('/1488', handler1488)
app.listen(3000, () => {})
        