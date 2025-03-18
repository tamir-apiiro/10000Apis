
const express = require('express')
import {handler1758} from "./handler1758";
const app = express()
app.get('/1758', handler1758)
app.listen(3000, () => {})
        