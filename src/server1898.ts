
const express = require('express')
import {handler1898} from "./handler1898";
const app = express()
app.get('/1898', handler1898)
app.listen(3000, () => {})
        