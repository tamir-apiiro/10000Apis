
const express = require('express')
import {handler1048} from "./handler1048";
const app = express()
app.get('/1048', handler1048)
app.listen(3000, () => {})
        