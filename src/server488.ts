
const express = require('express')
import {handler488} from "./handler488";
const app = express()
app.get('/488', handler488)
app.listen(3000, () => {})
        