
const express = require('express')
import {handler7850} from "./handler7850";
const app = express()
app.get('/7850', handler7850)
app.listen(3000, () => {})
        