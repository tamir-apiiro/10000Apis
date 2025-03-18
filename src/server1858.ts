
const express = require('express')
import {handler1858} from "./handler1858";
const app = express()
app.get('/1858', handler1858)
app.listen(3000, () => {})
        